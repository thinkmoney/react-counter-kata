import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import NavBar from '.'

describe('NavBar', () => { 
    it('navigates to page when link is clicked', async () => { 
        const user = userEvent.setup();
        
        render(
            <BrowserRouter>
                <NavBar />
            </BrowserRouter>  
        )
        const link = screen.getByText(/about/i);
        await user.click(link);
        expect(link.href).toBe('http://localhost/about'); 
    })
});