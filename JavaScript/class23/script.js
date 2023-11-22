// const Company = {
//     name: "bigCompany",
//     Noemp: 50,
//     PanNo: 123,


// Department : {
//     Dname: "bigMart",
//     Did: 123,
// },

// deal() {
//     console.log("deal done with ninja");
// }

// }

// Company.deal();
// console.log(Company);



// function newCompany (Name, PanNo, Noemp)
// {
//     const companyOne ={
//         Name : Name,
//         PanNo : PanNo,
//         Noemp : Noemp,
//     }

//   return companyOne;

// }

// const company = newCompany("BigCompany",123,50);
// console.log(company);
// const company1= newCompany("smallCompany",13,70);
// console.log(company1);


function Company(Name,Noemp,PanNo)
{
    this.Name = Name,
    this.Noemp = Noemp,
    this.PanNo = PanNo,

    this.deal = function()
    {
        console.log("rinitapati don");
    }
}

const companyOne = new Company("senapati",123,50);
console.log(companyOne);
companyOne.deal();



