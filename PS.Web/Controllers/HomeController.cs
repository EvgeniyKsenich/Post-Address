using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using PS.DB.import;
using PS.DB.Repositories;
using PS.Business.Enteties;

namespace PS.Web.Controllers
{
    public class HomeController : Controller
    {
        private static IItems<Item> ItemRepositories;
        public HomeController()
        {
            ItemRepositories = new ItemsRepositories();
        }

        public ActionResult Index()
        {
            return View();
        }
    }
}