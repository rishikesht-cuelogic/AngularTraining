using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pattern
{
    class Program
    {
        static int GetPartitionCount(int totalCount)
        {
            for(var i = 1; i < totalCount / 2; i++)
            {
                if (totalCount / i == 3)
                    return i;
            }
            return 1;
        }
        static void Main(string[] args)
        {
            int[] array = new int[] { 1,2,3,4,5,6,7,8,9,10,11,12};
            //var totalPartitions = GetPartitionCount(array.Count());
            for (var i = 0; i < 3; i++)
            {
                Display(i, array);
                Console.WriteLine();
            }
            Console.ReadKey();
        }

        static void Display(int i, int[] array)
        {
            var count = array.Count();
            while (i < count)
            {
                Console.Write(array[i] + " ");
                i = i + 3;
            }
        }
    }
}
