using AutoMapper;
using PS.Business.Enteties;
using PS.DB;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PS.Web.Helpers
{
    public class AutoMapper
    {
        public static void Init()
        {
            Mapper.Initialize(config =>
            {
                config.CreateMap<Item, Items>();
                config.CreateMap<List<Item>, List<Items>>();
            });
        }
    }
}