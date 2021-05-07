export type Styles = {
  logo: string;
  mainNavigation: string;
  menuButton: string;
  menuLink: string;
  menuLinks: string;
  open: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
