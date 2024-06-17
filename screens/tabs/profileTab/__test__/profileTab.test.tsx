import React from 'react';
import renderer from 'react-test-renderer';
import { Provider as PaperProvider } from 'react-native-paper';
import ProfileTab from '../index';
import { ProfileInfo, userData } from '../constants/profileInfo';
import { PaperTheme } from '@/constants/Colors';

const theme = PaperTheme.light;
describe('ProfileTab', () => {
    it('should render the profile section correctly', () => {
        const tree = renderer.create(
            <PaperProvider theme={theme}>
                <ProfileTab />
            </PaperProvider>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });


    it('should contain profile name and account name', () => {
        const tree = renderer.create(
            <PaperProvider theme={theme}>
                <ProfileTab />
            </PaperProvider>
        ).root;

        expect(tree.findByProps({ children: 'Mi Perfil' })).toBeTruthy();
        expect(tree.findByProps({ children: 'Usuario MilaBot' })).toBeTruthy();
    });

    it('should render the contact information correctly', () => {
        const tree = renderer.create(
            <PaperProvider theme={theme}>
                <ProfileTab />
            </PaperProvider>
        ).root;

        Object.entries(ProfileInfo).forEach(([key, info]) => {
            expect(tree.findByProps({ children: info.title })).toBeTruthy();
            expect(tree.findByProps({ children: userData[key] })).toBeTruthy();
        });
    });
});
