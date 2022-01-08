import { render } from '@testing-library/svelte';
import FetchResult from "./FetchResult.svelte";
import requireMock = jest.requireMock;
import requireActual = jest.requireActual;


jest.mock('./fetch', () => ({
    fetch: jest.fn(jest.requireActual('./fetch').fetch),
}));

const { fetch } = requireMock('./fetch');

describe('tests for FetchResult', () => {
    test('should be "real thing!"', () => {
        const {getByText} = render(FetchResult);
        expect(getByText('real thing!')).toBeDefined();
    })

    test('should not be "real thing!"', () => {
        fetch.mockImplementationOnce(() => 'fake thing...')
        const {getByText} = render(FetchResult);
        expect(getByText.bind('real thing!')).toThrowError();
    })

    test('should be "real thing!"', () => {
        fetch.mockImplementationOnce(() => 'fake thing...');
        const { getByText } = render(FetchResult);
        expect(getByText('fake thing...')).toBeDefined();
    })
})