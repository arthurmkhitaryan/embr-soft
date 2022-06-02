import * as S from './Navbar.styles';

export const Navbar = () => {

  const links=[
    {
      label:'Works',
      href:'/works',
    },
    {
      label:'Services',
      href:'/services',
    },
    {
      label:'About Us',
      href:'/about',
    },
    {
      label:'Blog',
      href:'/blog',
    },
    {
      label:'Join Us',
      href:'/join',
    },
    {
      label:'Contacts',
      href:'/contacts',
    },
  ]
  return (
    <S.NavbarWrapper>
      {links.map(( link) => (
          <a href={link.href}  key={link.label}>
            {link.label}
          </a>
      ))}
    </S.NavbarWrapper>
  );
}