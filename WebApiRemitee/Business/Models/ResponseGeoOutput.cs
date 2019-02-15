using DataAccess.Context;
using GeoCoordinatePortable;

namespace Business.Models
{
    public class ResponseGeoOutput
    {
        public GeoCoordinate Geocalization { get; set; }
        public string Sucursal { get; set; }
        public string Adress { get; set; }
    }
}
