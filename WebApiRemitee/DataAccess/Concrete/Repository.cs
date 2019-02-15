using DataAccess.Context;
using DataAccess.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;

namespace DataAccess.Concrete
{
    public class Repository<TEntity> : IRepository<TEntity> where TEntity : class
    {
        protected readonly Db_SucursalContext _context;

        public Repository(Db_SucursalContext context)
        {
            _context = context;
            _context.PayerBranch
                    .Include(b => b.Payer);
        }

        public void Add(TEntity entity)
        {
            _context.Set<TEntity>().Add(entity);
        }

        public void AddRange(IEnumerable<TEntity> entities)
        {
            _context.Set<TEntity>().AddRange(entities);
        }

        public IEnumerable<TEntity> Find(Expression<Func<TEntity, bool>> predicate)
        {

            return _context.Set<TEntity>().Where(predicate);
        }

        public TEntity Get(int id)
        {
            return _context.Set<TEntity>().Find(id);
        }

        public IEnumerable<TEntity> GetAll()
        {
            return _context.Set<TEntity>().ToList();
        }

        public void Remove(TEntity entity)
        {
            _context.Set<TEntity>().Remove(entity);
        }

        public void RemoveRange(IEnumerable<TEntity> entities)
        {
            _context.Set<TEntity>().RemoveRange(entities);
        }



        public void SaveChanges()
        {
            _context.SaveChanges();
        }

        public TEntity FindOnlyOne(Expression<Func<TEntity, bool>> predicate)
        {
            return _context.Set<TEntity>().Where(predicate).FirstOrDefault();
        }

        public void RemoveByExpression(Expression<Func<TEntity, bool>> predicate)
        {
            _context.Set<TEntity>().Remove(_context.Set<TEntity>().Where(predicate).FirstOrDefault());
        }

        public void MapObjectDatabase(TEntity entity, TEntity item)
        {

            _context.Entry(entity).CurrentValues.SetValues(item);
        }

    }
}
