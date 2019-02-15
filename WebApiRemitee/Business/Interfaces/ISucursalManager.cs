using Business.Models;
using DataAccess.Context;
using System.Collections.Generic;

namespace Business.Interfaces
{
    public interface ISucursalManager
    {
        void DeletePayer(int id);
        IList<Payer> GetAllPayers();
        Payer GetPayerById(int id);
        void SavePayer(Payer payer);
       
    }
}