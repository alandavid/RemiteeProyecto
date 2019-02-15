using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Business.Interfaces;
using DataAccess.Context;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebApiRemitee.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RedController : ControllerBase
    {
        private IRedManager _redManager;
        public RedController(IRedManager sucursalManager)
        {
            _redManager = sucursalManager;
        }
        // GET api/sucursal
        [HttpGet]

        public List<PayerBranch> Get()
        {

            return _redManager.GetAllPayerBranch().ToList();
        }

        // GET api/sucursal/5
        [HttpGet("GetById")]

        public PayerBranch Get(int id)
        {
            return _redManager.GetPayerBranchById(id);
        }


      
        // POST api/sucursal
        [HttpPost]

        public void Post([FromBody] PayerBranch payer)
        {
            _redManager.SavePayerBranch(payer);
        }

        //// PUT api/sucursal/5
        [HttpPut]
        public void Put([FromBody] PayerBranch payer)
        {
            _redManager.UpdatePayerBranch(payer);
        }

        // DELETE api/sucursal/5
        [HttpDelete("{id}")]

        public void Delete(int id)
        {
            _redManager.DeletePayerBranch(id);
        }
    }
}
