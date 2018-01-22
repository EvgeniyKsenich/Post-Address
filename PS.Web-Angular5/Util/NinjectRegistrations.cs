using Ninject.Modules;
using PS.Business.Enteties;
using PS.DB;
using PS.DB.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PS.Web_Angular5.Util
{
    public class NinjectRegistrations : NinjectModule
    {
        public override void Load()
        {
            Bind<IItems<Item>>().To<ItemsRepositories>();
        }
    }
}