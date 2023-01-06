// To check Number is prime number or not


let number=7;

let count=0;

for(let i=1;i<=number;i++)
{
	if(number%i==0)
	{
		count++;
	}
}
if(count==2)
{
	console.log(number," is a Prime Number");
}
else
{
	console.log(number,"is not a Prime Number");
}


//To check Palindrome or Not


let arr="lalit";

let bag="";

for (let i=arr.length-1; i>=0; i--)
{
  bag+=arr[i];
}

if(arr===bag)
{
	console.log(arr," is Palindrome")
}
 else 
{
	console.log(arr,"Not a Palindrome")
}
