using System;
using System.IO;
using System.Linq;
using System.Collections.Generic;

var input = (await File.ReadAllLinesAsync(@"./input.txt"))
	.Select(x => int.Parse(x))
	.ToList();

//input.
//var x = ToSlidingPartition(input, 3).Select(Sum).Where();


static IEnumerable<IEnumerable<int>> ToSlidingPartition(List<int> ints, int size)
{
	var intsLenth = ints.Count();
	var r = intsLenth % size;
	var lengthOfPartitions = intsLenth - r;
	var partitions = new List<List<int>>();
	var position = 0;
	while (position <= lengthOfPartitions)
	{
		var start = position;
		partitions.Add(ints.GetRange(start, size));
		position++;
	}
	return partitions;
}

//static bool IsGtPrev() {}

static int Sum(IEnumerable<int> partition)
{
	return partition.Sum();
}