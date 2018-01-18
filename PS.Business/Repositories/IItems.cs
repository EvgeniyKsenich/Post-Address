using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PS.DB.Repositories
{
    public interface IItems<T>
    {
        IEnumerable<T> GetList();

        T GetById(int id);

        int Delete(int id);

        int Edit(T item);

        void Save(T item);

        int SaveAll(List<T> List);
    }
}