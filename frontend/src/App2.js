import React, { useMemo } from 'react'
import styled from "styled-components";
import bg from './img/bg.png'
import { MainLayout } from './styles/Layouts'
import Orb from './components/Orb'
import Navigation from './components/Navigation'
import Dashboard from './components/Dashboard';
import Income from './components/Income'
import Expenses from './components/Expenses';
import { useGlobalContext } from './context/globalContext';
import { useState } from 'react';
function App2(){
    const [active, setActive] = useState(1)
    
    const global = useGlobalContext()
    console.log(global);
    
    const displayData = () => {
      switch (active) {
        case 1:
          return <Dashboard />
        case 2:
          return <Dashboard />
        case 3:
          return <Income />
        case 4:
          return <Expenses />
        default:
          return <Dashboard />
      }
    }
    
    const orbMemo = useMemo(() => {
      return <Orb />
    }, [])
    
    return (
      <AppStyled bg={bg} className="App">
        {orbMemo}
        <MainLayout>
          <Navigation active={active} setActive={setActive} />
          <main>
            {displayData()}
          </main>
        </MainLayout>
      </AppStyled>
    );
    }
    const AppStyled = styled.div`
      height: 100vh;
      background-image: url(${props => props.bg});
      position: relative;
      main{
        flex: 1;
        background: rgba(252, 246, 249, 0.78);
        border: 3px solid #FFFFFF;
        backdrop-filter: blur(4.5px);
        border-radius: 32px;
        overflow-x: hidden;
        &::-webkit-scrollbar{
          width: 0;
        }
      }
    `;
    
    
    export default App2;
    