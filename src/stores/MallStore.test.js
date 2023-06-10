import MallStore from './MallStore';

const context = describe;

describe('MallStore', () => {
  let mallStore;

  beforeEach(() => {
    mallStore = new MallStore();
  });

  describe('login', () => {
    context('with correct userId and password', () => {
      it('loads userId information', async () => {
        await mallStore.login({ userId: 'a111', password: 'Aa1!!!!!' });

        expect(mallStore.amount).toBe(50_000);
      });
    });

    context('with incorrect userId', () => {
      it('loads userId information', async () => {
        await mallStore.login({ userId: 'xxx', password: 'Aa1!!!!!' });

        expect(mallStore.amount).toBe(0);
      });
    });
  });

  describe('fetchAccount', () => {
    it('sets account information', async () => {
      await mallStore.fetchAccount();

      expect(mallStore.userId).toBe('a111');
      expect(mallStore.amount).toBe(50_000);
    });
  });

  describe('fetchProduct', () => {
    it('loads product information', async () => {
      await mallStore.fetchProduct(1);

      expect(mallStore.title).toBe('[단독각인] 캔디 글레이즈 컬러밤');
      expect(mallStore.company).toBe('입생로랑');
    });
  });

  describe('fetchOrder', () => {
    it('loads order information', async () => {
      await mallStore.fetchOrder(1);

      expect(mallStore.orderId).toBe(1);
      expect(mallStore.quantity).toBe(1);
      expect(mallStore.title).toBe('[단독각인] 캔디 글레이즈 컬러밤');
      expect(mallStore.company).toBe('입생로랑');
    });
  });
});
