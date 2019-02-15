using Business.Interfaces;
using Business.Models;
using DataAccess.Context;
using DataAccess.Interfaces;
using GeoCoordinatePortable;
using System.Collections.Generic;
using System.Linq;

namespace Business
{

    public class RedManager : IRedManager
    {

        private IRepository<PayerBranch> _repositoryPayerBranch;
        private ISucursalManager _sucursalManager;

        public RedManager(IRepository<PayerBranch> repositoryPayerBranch, ISucursalManager sucursalManager)
        {

            _repositoryPayerBranch = repositoryPayerBranch;
            _sucursalManager = sucursalManager;

        }

        /// <summary>
        /// Responsable por obtener todos los registros en la DB de la Tabla Payer
        /// </summary>
        /// <returns>Retorna una coleccion de Payers</returns>
        public IList<PayerBranch> GetAllPayerBranch()
        {
            return _repositoryPayerBranch.GetAll().ToList();
        }

        /// <summary>
        /// Responsable por obtener el registro en la DB por Id de la tabla Payer
        /// </summary>
        /// <param name="id"></param>
        /// <returns>retorna el objeto buscado</returns>
        public PayerBranch GetPayerBranchById(int id)
        {
            return _repositoryPayerBranch.FindOnlyOne(e => e.Id == id);
        }

        /// <summary>
        /// Responsable por Guardar el registro en la DB Insert o Update en la tabla de Payer
        /// </summary>
        /// <param name="payer"></param>
        public void SavePayerBranch(PayerBranch payer)
        {
            _repositoryPayerBranch.Add(payer);
            _repositoryPayerBranch.SaveChanges();
        }

        /// <summary>
        /// Responsable por Actualizar el registro en la DB  en la tabla de PayerBranch
        /// </summary>
        /// <param name="payer"></param>
        public void UpdatePayerBranch(PayerBranch payer)
        {
            var data = GetPayerBranchById(payer.Id);
            _repositoryPayerBranch.MapObjectDatabase(data, payer);
            _repositoryPayerBranch.SaveChanges();
        }

        /// <summary>
        /// Responsable por Eliminar el registro en la DB en la tabla de Payer
        /// </summary>
        /// <param name="id"></param>
        public void DeletePayerBranch(int id)
        {
            _repositoryPayerBranch.Remove(GetPayerBranchById(id));
            _repositoryPayerBranch.SaveChanges();
        }

        /// <summary>
        /// Método Responsable de obtener la sucursal mas cerna basandose en la direccion.
        /// </summary>
        /// <param name="latitud"></param>
        /// <param name="longitud"></param>
        /// <returns>Retorna la Sucursal mas cercana</returns>
        public ResponseGeoOutput GetPayerNearByLatAndLog(double latitud, double longitud)
        {
            //Variable generada con la localizacion de la latid y longitud pasada por parametro seria la ubicacion que el usuario.
            //passa por parametro. 
            var coord = new GeoCoordinate(latitud, longitud);

            //query que busca las Direcciones registrada en la DB que contienen la informacion de latitud y longitud en el caso si popdria utilizar un servico de tercero para hacer la consulta de las direcciones disponible 
            var locations = GetAllPayerBranch().Select(e =>
            {
                return new ResponseGeoOutput
                {
                    Adress = e.FormattedAddress,
                    Sucursal = GetSucursal(e.PayerId.Value),
                    Geocalization = new GeoCoordinate(e.Latitude.Value, e.Longitude.Value)

                };
            }).ToList();


            //Query que busca la Ubicacion mas cercana basada en el parametro solicitado.
            var nearest = locations.Select(x => x)
                                   .OrderBy(x => x.Geocalization.GetDistanceTo(coord))
                                   .First();
            //Retorna Sucursal mas cercana.
            return nearest;
        }

        private string GetSucursal(int id)
        {
            return _sucursalManager.GetPayerById(id).Name;
        }


    }
}
