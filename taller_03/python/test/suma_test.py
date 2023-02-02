import unittest
from python.ejercicio import suma


class TestSuma(unittest.TestCase):
    def test_suma(self):
        test_data = [
            (1, 2, 3),
            (0, 0, 0),
            (-1, 1, 0),
            (100, 200, 301)
        ]
        for data in test_data:
            result = suma(data[0], data[1])
            self.assertEqual(result, data[2])

if __name__ == '__main__':
    unittest.main()
