using PS.Business.Enteties;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PS.DB.import
{
    public class CSVReader
    {
        public static List<Item> GetList(string path)
        {
            int counter = 0;
            List<Item> List = new List<Item>();
            using (var reader = new StreamReader(@path, Encoding.GetEncoding(1251)))
            {
                while (!reader.EndOfStream)
                {
                    var line = reader.ReadLine();
                    var values = line.Split(';');

                    if (counter == 0)
                    {
                        counter++;
                        continue;
                    }
                    try{
                        List.Add(new Item() {
                            region = values[0],
                            district = values[1],
                            city = values[2],
                            indexx = values[3],
                            street = values[4],
                            houses = values[5]
                        });
                    }
                    catch(Exception Exeption)
                    {

                    }
                    counter++;
                }
            }
            return List;
        }
    }
}
