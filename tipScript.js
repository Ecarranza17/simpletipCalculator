
//Calculation Controller

{document.querySelector('.add__btn').addEventListener('click',
  function (){
  let amount = document.querySelector('.addAmount').value;
  let percentTip= document.querySelector('.percentTip').value;
  let tipAmount = amount * (percentTip/100);
  let roundedDollarTip = `$${tipAmount.toFixed(2)}`;

  document.querySelector('.dollarTip').textContent = roundedDollarTip;

/*
//You can also place the dollar sign and round to the nearest hundredth this way
  var Rounder = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
  });

  return Rounder.format(c);

*/

  }

)};


//Refresh Controller
{
 function refresh() {
   document.querySelector('.addAmount').value = '';
   document.querySelector('.percentTip').value = '';
   document.querySelector('.dollarTip').value = '';
 }


}
