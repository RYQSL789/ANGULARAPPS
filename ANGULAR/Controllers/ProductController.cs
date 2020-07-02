using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ANGULAR.Logic;
using ANGULAR.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ANGULAR.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        // GET: api/Product
        [HttpGet]
        public IEnumerable<Product> Get()
        {
            return Products.ProductsGet();
        }

        // GET: api/Product/5
        [HttpGet("{id}", Name = "Get")]
        public Product Get(string id)
        {
            return Products.ProductsGet().FirstOrDefault(p => p.id == id);
        }

        // POST: api/Product
        [HttpPost]
        public bool Post([FromBody] Product product)
        {
            return true;
        }

        // PUT: api/Product/5
        [HttpPut]
        public bool Put([FromBody] Product produce)
        {
            return true;
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public bool Delete(string id)
        {
            Products.ProductsGet().FirstOrDefault(p => p.id == id);
            return true;
        }
    }
}
