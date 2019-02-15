using Business.Interfaces;
using Business.Models;
using DataAccess.Context;
using DataAccess.Interfaces;
using GeoCoordinatePortable;
using System.Collections.Generic;
using System.Linq;

namespace Business
{
    /// <summary>
    /// Clase Responsable por manejar todas la funcionalidades relacionada a sucursales
    /// </summary>
    public class SucursalManager : ISucursalManager
    {
        private IRepository<Payer> _repository;
 

        public SucursalManager(IRepository<Payer> repository)
        {
            _repository = repository;
          

        }

        /// <summary>
        /// Responsable por obtener todos los registros en la DB de la Tabla Payer
        /// </summary>
        /// <returns>Retorna una coleccion de Payers</returns>
        public IList<Payer> GetAllPayers()
        {
            return _repository.GetAll().ToList();
        }

        /// <summary>
        /// Responsable por obtener el registro en la DB por Id de la tabla Payer
        /// </summary>
        /// <param name="id"></param>
        /// <returns>retorna el objeto buscado</returns>
        public Payer GetPayerById(int id)
        {
            return _repository.FindOnlyOne(e => e.Id == id);
        }

        /// <summary>
        /// Responsable por Guardar el registro en la DB Insert o Update en la tabla de Payer
        /// </summary>
        /// <param name="payer"></param>
        public void SavePayer(Payer payer)
        {
            _repository.Add(payer);
            _repository.SaveChanges();
        }

        /// <summary>
        /// Responsable por Eliminar el registro en la DB en la tabla de Payer
        /// </summary>
        /// <param name="payer"></param>
        public void DeletePayer(int id)
        {
            _repository.Remove(GetPayerById(id));
            _repository.SaveChanges();
        }

     

    }
}
