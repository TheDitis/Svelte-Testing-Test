import AlternatingTextWithButton from "./AlternatingTextWithButton.svelte";
import {render, fireEvent, getByRole} from '@testing-library/svelte';

describe('Tests for AlternatingTextWithButton', () => {
    it('should initialize with "no click"', async () => {
        const { getByText } = render(AlternatingTextWithButton);
        // const btn = getByRole('button');
        const text = getByText('no click')
        expect(text).toBeDefined();
    })

    it('should be "no click" before click and "HI!" after click', async () => {
        const { getByText, queryByText } = render(AlternatingTextWithButton);
        const btn = getByText('next');
        expect(getByText('no click')).toBeDefined();
        await fireEvent.click(btn);
        expect(getByText('HI!')).toBeDefined();
        expect(queryByText('no click')).toBeFalsy();
    })

    it('should be "stop!" after 2 clicks', async () => {
        const { getByText } = render(AlternatingTextWithButton);
        const btn = getByText('next');
        await fireEvent.click(btn);
        await fireEvent.click(btn);
        expect(getByText('stop!')).toBeDefined();
    })

    it('should be clicked 2 times', async () => {
        const { getByText, component } = render(AlternatingTextWithButton);
        const mockOnClick = jest.fn();
        const btn = getByText('next');
        btn.onclick = mockOnClick;
        await fireEvent.click(btn);
        await fireEvent.click(btn);
        expect(mockOnClick.mock.calls.length).toBe(2);
        expect(getByText('stop!')).toBeDefined();
    })
})

