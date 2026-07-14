import http from 'k6/http';
import { sleep } from 'k6';

const mode = __ENV.MODE || 'normal';

export const options = {
    vus: mode === 'charge' ? 10 : 1,
    duration: '24h'
};

const BASE = 'http://api-gateway:8080';

export default function () {

    // Accueil
    http.get(`${BASE}/`);

    // Propriétaires
    http.get(`${BASE}/api/customer/owners`);

    // Un propriétaire
    http.get(`${BASE}/api/customer/owners/1`);

    // Vétérinaires
    http.get(`${BASE}/api/vet/vets`);

    // Visites
    http.get(`${BASE}/api/visit/owners/1/pets/1/visits`);

    sleep(1);
}
