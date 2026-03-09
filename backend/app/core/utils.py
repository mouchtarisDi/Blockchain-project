import hashlib
import json


def hash_block_data(block_data: dict) -> str:
    """
    Υπολογίζει SHA256 hash από dictionary δεδομένων block.

    Args:
        block_data: Τα δεδομένα του block σε μορφή dictionary.

    Returns:
        str: Το SHA256 hash σε hexadecimal μορφή.
    """
    block_string = json.dumps(block_data, sort_keys=True).encode()
    return hashlib.sha256(block_string).hexdigest()