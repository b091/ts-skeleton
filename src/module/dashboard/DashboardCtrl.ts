export class DashboardCtrl {

  public title:string;

  constructor(private toastr:Toastr) {
    this.title = 'Dashboard yol';
    toastr.success('Salute!', 'Toastr fun!');
  }

}
