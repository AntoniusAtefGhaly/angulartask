import { Component, OnInit } from '@angular/core';
import { LabService } from 'src/app/Services/lab.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styles: [
  ]
})
export class AddUserComponent implements OnInit {

  constructor(private myserves:LabService) { }

  ngOnInit(): void {
  }

  name:any;
  email:any;
  user_id:any;
  photoUrl:any;


  Add(){
    let u={
      authToken: "ya29.a0AfH6SMA2veYfZXY1dqRBhjtA3tLoAObZmJFX74-w3r929XxGzJcso7mStjiqgmAyU4ifMPD08caaKonjAbe1cKk6zduzK-ArGlA5iwxDVEKNrLNue2JKf5BunoAwVG2W1UThnei06fCln_5-PrIGcHGyRIiiiQ",
      email: this.email,
      id: this.user_id,
      idToken: "eyJhbGciOiJSUzI1NiIsImtpZCI6Ijc3MjA5MTA0Y2NkODkwYTVhZWRkNjczM2UwMjUyZjU0ZTg4MmYxM2MiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNTE2NTY4ODU4MDAzLW1qYW9tcGZtYmk4bWpkdjFrYmpjdDZqZ3AyaDU5NjU4LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNTE2NTY4ODU4MDAzLW1qYW9tcGZtYmk4bWpkdjFrYmpjdDZqZ3AyaDU5NjU4LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTA3MTAyOTI4MzcxMDk0NTk4OTk4IiwiZW1haWwiOiJhbnRvbml1cy5hdGVmMUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6IjZnRmlHQllQOTlDUk13cU90Q05jYUEiLCJuYW1lIjoiQW50b25pdXMgQXRlZiIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS0vQU9oMTRHZ1Eyc1dDSnI5aUVmTGZXTHc0WVJYRDB0TnRKMWFTdTNlOWdXTldRUT1zOTYtYyIsImdpdmVuX25hbWUiOiJBbnRvbml1cyIsImZhbWlseV9uYW1lIjoiQXRlZiIsImxvY2FsZSI6ImVuIiwiaWF0IjoxNjE5OTI1ODU2LCJleHAiOjE2MTk5Mjk0NTYsImp0aSI6IjQ4NTU5ZTIxM2FhMDE1NTRmYmZiNGRmYTc4ZmUyZDU0MDNjNTM1MGQifQ.SCVrokzDbK2ffZrIp9ggQFwBCsnKKU7WRLnsAm6mgD9PEcVH4FYluDkdtkdZdztDcSpvmQwEe1b4h1rmX67JluYR9yMU7RD4EYzfdi0GA0mMjb8GqbBc0NyQgJhKnvVen6v_qpui_DzocqgV_ea-mDdDadbodkYmOYvcecDWuDR0n8Ve1AzUI8Hp4U_DPrTTbJa8nybTlH2KbM6v3hL1Pn_BcmcYETEB1S6rsJxXCoHmlglXm7OGTyvGZ8kW4P4niv-_GDeVCmpL-hyZ3WgYSoUX1E5GahOVx5GoxC8yUrm_suirG-BVZWqHj_DPGWYE4pcsWlrf4d7or4KwINGGJw",
      name: this.name,
      photoUrl: this.photoUrl,
      provider: "GOOGLE",
      user_id:this.user_id
    };
  console.log(u);
    this.myserves.AddUser(u).subscribe( );
//    window.location.("http://localhost:64514/users");
  }
}