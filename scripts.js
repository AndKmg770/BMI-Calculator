function calculateBMI()
{
  var height=parseFloat(document.getElementById("heightinput").value);
  var weight=parseFloat(document.getElementById("weightinput").value);
  var wtunit=document.getElementById("weightselection").value;
  var htunit=document.getElementById("heightselection").value;
  var convertweight={
    Pounds:0.454,
    Ounce:0.0283,
    Kilograms:1,
    Grams:0.001
  }
  var convertheight={
    Feet:0.305,
    Inches:0.0254,
    Centimetres:0.01,
    Metres:1
  }
  var weightkg=weight*convertweight[wtunit];
  var heightmtrs=height*convertheight[htunit];
  var bmicalc=weightkg/(heightmtrs*heightmtrs);
  document.getElementById("bmians").innerHTML=bmicalc.toFixed(2);
}