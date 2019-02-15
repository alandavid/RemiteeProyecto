using System;
using System.Collections.Generic;

namespace DataAccess.Context
{
    public partial class PayerBranch
    {
        public int Id { get; set; }
        public int? PayerId { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public string FormattedAddress { get; set; }
        public double? Latitude { get; set; }
        public double? Longitude { get; set; }

        public Payer Payer { get; set; }
    }
}
