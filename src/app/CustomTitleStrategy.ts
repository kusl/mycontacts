import { TitleStrategy, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable()
export class CustomTitleStrategy extends TitleStrategy {
    getDefaultTitle(): string {
        return "My Contacts";
    }
    constructor(private titleService: Title) {
        super();
    }

    override updateTitle(snapshot: RouterStateSnapshot) {
        const title = this.buildTitle(snapshot) || this.getDefaultTitle();
        this.titleService.setTitle(title);
    }

    override buildTitle(snapshot: RouterStateSnapshot): string | undefined {
        const routeData = snapshot.root.firstChild?.data;
        return routeData?.['title'] || this.getDefaultTitle();
    }
}