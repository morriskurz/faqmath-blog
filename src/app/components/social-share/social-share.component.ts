import { Component, OnInit } from "@angular/core";
import { FaIconLibrary } from "@fortawesome/angular-fontawesome";
import { iconpack } from "src/icons";

@Component({
  selector: "app-social-share",
  templateUrl: "./social-share.component.html",
  styleUrls: ["./social-share.component.scss"]
})
export class SocialShareComponent implements OnInit {
  constructor(private library: FaIconLibrary) {}

  ngOnInit() {
    this.library.addIcons(...iconpack);
  }
}

@Component({ selector: "app-social-share", template: "" })
export class SocialShareComponentStub {}
