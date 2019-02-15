using System;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace DataAccess.Interfaces
{
    public interface IRepository<TEntity> where TEntity : class
    {
        TEntity Get(int id);
        IEnumerable<TEntity> GetAll();
        IEnumerable<TEntity> Find(Expression<Func<TEntity, bool>> predicate);
        TEntity FindOnlyOne(Expression<Func<TEntity, bool>> predicate);
        void Add(TEntity entity);
        void AddRange(IEnumerable<TEntity> entities);
        void Remove(TEntity entity);
        void RemoveRange(IEnumerable<TEntity> entities);
        void SaveChanges();
      
        void RemoveByExpression(Expression<Func<TEntity, bool>> predicate);
        void MapObjectDatabase(TEntity entity, TEntity item);
    }
}