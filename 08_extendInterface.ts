interface IExterior{
    color : string;
    doors : number;
}
 interface IInterior {
    seats :number;
    auto :boolean;
 }
  interface ICar extends  IExterior,IInterior{
    make :string;
    model :string;
    year :number;
  }

  let mycar :ICar = {
      make: "Tata",
      model: "altroz",
      year: 2024,
      color: "red",
      doors: 4,
      seats: 7,
      auto: false
  }

  console.log(mycar);
  