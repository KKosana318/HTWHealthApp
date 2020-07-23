import React from 'react';

import PatientList from '../../components/patient-list/patient-list.component';

import './patient-page.styles.scss';

const PatientPage = () => (
<<<<<<< Updated upstream
    <div className='homepage'>
        <div className='directory-menu'>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Patient 1</h1>
                    <span className='subtitle'>URGENT</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Patient 2</h1>
                    <span className='subtitle'>URGENT</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Patient 3</h1>
                    <span className='subtitle'>REG. CHECKUP</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Patient 4</h1>
                    <span className='subtitle'>LOW PRIO.</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Patient 5</h1>
                    <span className='subtitle'>LOW PRIO.</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Patient 6</h1>
                    <span className='subtitle'>REG. CHECKUP</span>
                </div>
            </div>
        </div>
=======
    <div className='patient-list'>
        <PatientList />
>>>>>>> Stashed changes
    </div>
)

export default PatientPage;