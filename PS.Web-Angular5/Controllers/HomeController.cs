using PS.Business.Enteties;
using PS.DB.import;
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
        public ActionResult Index()
        {
            return View();
        }

        public string Init()
        {
            var repo = new ItemsRepositories();
            var List = CSVReader.GetList(@"D:\Proj\Post-Address\res\houses.csv");
            foreach (var el in List)
            {
                repo.Save(el);
            }

            return "Init";
        }
    }
}