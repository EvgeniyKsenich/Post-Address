using PS.Business.Enteties;
using PS.DB.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PS.Web_Angular5.Controllers
{
    public class HomeController : Controller
    {

        private static IItems<Item> ItemRepositories;
        public HomeController(ItemsRepositories _ItemRepositories)
        {
            ItemRepositories = _ItemRepositories;
        }

        public ActionResult Index()
        {
            return View();
        }

        public void Get(int id)
        {
            ItemRepositories.GetById(id);
        }
    }
}