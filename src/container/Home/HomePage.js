import React from 'react'

import { Dashboard, DashboardMenu, DashboardButton } from '../../components';

const HomePage = () => (
    <Dashboard>
      <DashboardMenu title="The Memory game">
        <DashboardButton to="/game" >Start Game</DashboardButton>
      </DashboardMenu>
    </Dashboard>
);

export default HomePage;