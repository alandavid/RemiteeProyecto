using System.Collections.Generic;
using Business.Models;
using DataAccess.Context;

namespace Business.Interfaces
{
    public interface IRedManager
    {
        IList<PayerBranch> GetAllPayerBranch();
        ResponseGeoOutput GetPayerNearByLatAndLog(double latitud, double longitud);
        void DeletePayerBranch(int id);
        PayerBranch GetPayerBranchById(int id);
        void SavePayerBranch(PayerBranch payer);
        void UpdatePayerBranch(PayerBranch payer);
    }
}