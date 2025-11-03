// src/tests/integration/product.facade.spec.ts

import { provideHttpClient } from "@angular/common/http";
import { HttpClientTestingModule, HttpTestingController, provideHttpClientTesting } from "@angular/common/http/testing";
import { provideZonelessChangeDetection } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { CartApi } from "@app/features/cart/services/cart.api";
import { CartFacade } from "@app/features/cart/services/cart.facade";
import { CartStore } from "@app/features/cart/services/cart.store";
import {environment} from '../../environments/environment';
// 👆 Tu vois le "@app" ? C'est grâce à nos tsconfig qu'on peut l'utiliser 😉



// Grappe de tests
describe('ProductFacade.createProduct (integration)', () => {
  let facade: CartFacade;
  let http: HttpTestingController;
  let store: CartStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideZonelessChangeDetection(),
        CartFacade,
        CartApi,
        CartStore], // Client HTTP & Services DI
    });

    facade = TestBed.inject(CartFacade);         // Facade sous test
    http = TestBed.inject(HttpTestingController);   // Contrôleur HTTP mock
    store = TestBed.inject(CartStore);           // Store réel (signal)
  });

  // 🧪 Test d'intégration
  it('should call API, update store and return product', async () => {
    // 1. Arrange
    const dto = { name: 'Potion',category: "gaming", price: 50, stock: 5, inStock: true, imageUrl: "yolo.png" , rating: 4.1, description:"yoooo" , id: 123};
    const mockResponse = { ...dto, id: 123 }; // ce que le backend renverra

    // 2. Act
    const promise = facade.AddToCart(dto);

    // 3. Assert (API)
    const req = http.expectOne(`${environment.apiUrl}/cart.json`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(dto);

    // 4. Simuler la réponse du backend
    req.flush(mockResponse);

    // 5. Assert (Store + résultat)
    const result = await promise;
    expect(result.id).toBe(123);
    expect(store.Cart()[0]).toEqual(result);
  });
});
