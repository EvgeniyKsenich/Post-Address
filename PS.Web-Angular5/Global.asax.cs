using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Optimization;
using System.Web.Routing;
using Ninject.Web.Common.WebHost;
using PS.Web_Angular5.Util;
using System.Web.Mvc;
using Ninject.Modules;
using Ninject;
using Ninject.Web.WebApi;
using Unity;
using PS.DB.Repositories;
using PS.Business.Enteties;
using Unity.Lifetime;

namespace PS.Web_Angular5
{
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            GlobalConfiguration.Configure(WebApiConfig.Register);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);

            Helpers.AutoMapper.Init();

            var container = new UnityContainer();
            container.RegisterType<IItems<Item>, ItemsRepositories>(new HierarchicalLifetimeManager());
            GlobalConfiguration.Configuration.DependencyResolver = new UnityResolver(container);

            //NinjectModule registrations = new NinjectRegistrations();
            //var kernel = new StandardKernel(registrations);
            //GlobalConfiguration.Configuration.DependencyResolver = new NinjectDependencyResolver(kernel);
        }
    }
}
