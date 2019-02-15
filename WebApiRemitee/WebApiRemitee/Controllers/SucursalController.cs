using Business.Interfaces;
using Business.Models;
using DataAccess.Context;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace WebApiRemitee.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SucursalController : ControllerBase
    {
        private ISucursalManager _sucursalManager;
        public SucursalController(ISucursalManager sucursalManager)
        {
            _sucursalManager = sucursalManager;
        }
        // GET api/sucursal
        [HttpGet]
   
        public List<Payer> Get()
        {

            return _sucursalManager.GetAllPayers().ToList();
        }

        // GET api/sucursal/5
        [HttpGet("GetById")]
     
        public Payer Get(int id)
        {
            return _sucursalManager.GetPayerById(id);
        }

      
        //[HttpGet]
      
        //public ResponseGeoOutput Get(double latitud, double longitud)
        //{
        //    return _sucursalManager.GetPayerNearByLatAndLog(latitud, longitud);
        //}

        // POST api/sucursal
        [HttpPost]
      
        public void Post([FromBody] Payer payer)
        {
            _sucursalManager.SavePayer(payer);
        }

        //// PUT api/sucursal/5
        [HttpPut]
        public void Put([FromBody] Payer payer)
        {
            _sucursalManager.SavePayer(payer);
        }

        // DELETE api/sucursal/5
        [HttpDelete("Delete")]
       
        public void Delete(int id)
        {
            _sucursalManager.DeletePayer(id);
        }
    }
}
