using PS.Business.Enteties;
using PS.DB.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace PS.Web.Controllers
{
    public class AddressController : ApiController
    {
        private static IItems<Item> ItemRepositories;
        public AddressController()
        {
            ItemRepositories = new ItemsRepositories();
        }

        // GET: api/Address
        [HttpGet]
        public IEnumerable<Item> Get(int count, int start)
        {
            if (count < 0 || count > 1000)
                count = 1000;
            if (start < 0)
                start = 0;

            var List = ItemRepositories.GetList().Skip(start).Take(count);
            return List;
        }

        [HttpGet]
        public IEnumerable<Item> Get()
        {
            var List = ItemRepositories.GetList();
            return List;
        }

        // GET: api/Address/5
        [HttpGet]
        public Item Get(int id)
        {
            var item = ItemRepositories.GetById(id);
            return item;
        }

        // POST api/Address
        [HttpPost]
        public void Post([FromBody]Item item)
        {
            ItemRepositories.Save(item);
        }

        // PUT api/Address/5
        [HttpPut]
        public void Put([FromBody]Item item)
        {
            ItemRepositories.Edit(item);
        }

        // DELETE api/Address/5
        [HttpDelete]
        public void Delete(int id)
        {
            ItemRepositories.Delete(id);
        }
    }
}
