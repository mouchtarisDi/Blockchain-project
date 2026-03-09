class Block:
    """
    Αναπαριστά ένα block του blockchain.
    """

    def __init__(
        self,
        index: int,
        timestamp: float,
        transactions: list,
        previous_hash: str,
        nonce: int = 0,
        hash_value: str = ""
    ) -> None:
        """
        Αρχικοποιεί ένα νέο block.

        Args:
            index: Η θέση του block στο chain.
            timestamp: Ο χρόνος δημιουργίας του block.
            transactions: Η λίστα συναλλαγών του block.
            previous_hash: Το hash του προηγούμενου block.
            nonce: Η τιμή nonce για το proof of work.
            hash_value: Το τελικό hash του block.
        """
        self.index = index
        self.timestamp = timestamp
        self.transactions = transactions
        self.previous_hash = previous_hash
        self.nonce = nonce
        self.hash = hash_value

    def to_dict(self) -> dict:
        """
        Επιστρέφει το block σε μορφή dictionary.

        Returns:
            dict: Dictionary με όλα τα πεδία του block.
        """
        serialized_transactions = [
            tx.to_dict() if hasattr(tx, "to_dict") else tx
            for tx in self.transactions
        ]

        return {
            "index": self.index,
            "timestamp": self.timestamp,
            "transactions": serialized_transactions,
            "previous_hash": self.previous_hash,
            "nonce": self.nonce,
            "hash": self.hash
        }