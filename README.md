# Logic---Spiralizer

Buat sebuah function yang dapat mengembalikan data dengan pola spiral. Anggap kita memiliki array seperti ini:

Testcase untuk 2 dimensi :

let  array_masalah= [
	[1,2,3,4],
	[5,6,7,8],
	[9, 10, 11, 12],
	[13, 14, 15,16],
  ];
function polaSpiral(array_masalah)
// output yang diharapakan => [1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10]

Ilustrasi :

1	2	3	4
5	6	7	8
9	10	11	12
13	14	15	16

Function tersebut akan mengembalikan data sbb : [1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10]


Testcase untuk 5 dimensi :

let  array_masalah= [
	[1, 2, 3, 4, 5],
	[6, 7, 8, 9, 10],
	[11, 12, 13, 14, 15],
	[16, 17, 18, 19, 20],
        ]
function polaSpiral(array_masalah)
// output yang diharapkan => [1,2,3,4,5,10,15,20,19,18,17,16,11,6,7,8,9,14,13,12]

#Lanjut ke halaman berikutnya#
Ilustrasi :

1	2	3	4	5
6	7	8	9	10
11	12	13	14	15
16	17	18	19	20

Function tersebut akan mengembalikan data sbb : [1,2,3,4,5,10,15,20,19,18,17,16,11,6,7,8,9,14,13,12]
