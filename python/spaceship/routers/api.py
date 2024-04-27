from fastapi import APIRouter
import numpy as np

router = APIRouter()


@router.get('')
def hello_world() -> dict:
    return {'msg': 'Hello, World!'}

@router.get('/matrix')
def get_matrix_and_multiply() -> dict:
    width = 10
    height = 10

    matrix_a = np.random.rand(height, width)
    matrix_b = np.random.rand(height, width)

    multiplied = np.matmul(matrix_a, matrix_b)
    return {
        "matrix_a": matrix_a.tolist(),
        "matrix_b": matrix_b.tolist(),
        "multiplied": multiplied.tolist(),
    }
