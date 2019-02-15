using Business.Interfaces;
using Business.Models;
using Microsoft.AspNetCore.Mvc;

namespace WebApiRemitee.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DefaultFindController : ControllerBase
    {
        private IRedManager _redManager;
        public DefaultFindController(IRedManager sucursalManager)
        {
            _redManager = sucursalManager;
        }
        [HttpGet("GetFind")]

        public ResponseGeoOutput Get(double latitud, double longitud)
        {
            return _redManager.GetPayerNearByLatAndLog(latitud, longitud);
        }

    }
}
