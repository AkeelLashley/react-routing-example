import { Routes, Route, Link, Outlet, useParams } from 'react-router-dom';

const Navigation = () => {
  const style = {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#f3f4f6',
    padding: '20px',
    gap: '20px',
  };

  return (
    <>
      <div style={style}>
        <Link to="/">HOME</Link>
        <Link to="/shop">SHOP</Link>
        <Link to="/sign-in">SIGN IN</Link>
      </div>
      <Outlet />
    </>
  );
};

const Home = () => {
  const style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  };

  return <div style={style}>Home Component</div>;
};

const Shop = () => {
  const style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  };

  return <div style={style}>Shop Component</div>;
};

const ShopItem = () => {
  const style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  };
  const { id } = useParams();


  return <div style={style}>Showing details for item with ID: {id}</div>;
};

const SignIn = () => {
  const style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  };

  return <div style={style}>Sign In Component</div>;
};

const NotFound = () => {
  const style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    color: 'red',
  };

  return (
    <div style={style}>
      <h1>404 - Not Found</h1>
    </div>
  );
};

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="shop/:id" element={<ShopItem />} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
