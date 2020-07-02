using ANGULAR.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ANGULAR.Logic
{
    public static class Products
    {

        public static List<Product> ProductsGet()
        {
            var products = new List<Product>();
            products.Add(new Product() { id = "AA", description = "lorem ipsum product 1", image = "assets/images/PRODUCTO1.png", price = "80000", title = "PRODUCTO 001" });
            products.Add(new Product() { id = "AB", description = "lorem ipsum product 2", image = "assets/images/PRODUCTO2.png", price = "80000", title = "PRODUCTO 002" });
            products.Add(new Product() { id = "AC", description = "lorem ipsum product 3", image = "assets/images/PRODUCTO3.png", price = "80000", title = "PRODUCTO 003" });
            products.Add(new Product() { id = "AD", description = "lorem ipsum product 4", image = "assets/images/PRODUCTO4.png", price = "80000", title = "PRODUCTO 004" });
            products.Add(new Product() { id = "AE", description = "lorem ipsum product 5", image = "assets/images/PRODUCTO5.png", price = "80000", title = "PRODUCTO 005" });
            products.Add(new Product() { id = "AF", description = "lorem ipsum product 6", image = "assets/images/PRODUCTO6.png", price = "80000", title = "PRODUCTO 006" });
            return products;
        }
    }
}
