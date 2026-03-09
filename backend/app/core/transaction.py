class Transaction:
    """
    Αναπαριστά μία συναλλαγή μεταξύ δύο wallet addresses.
    """

    def __init__(self, sender: str, receiver: str, amount: float) -> None:
        """
        Αρχικοποιεί μία νέα συναλλαγή.

        Args:
            sender: Το wallet address του αποστολέα.
            receiver: Το wallet address του παραλήπτη.
            amount: Το ποσό της συναλλαγής.
        """
        self.sender = sender
        self.receiver = receiver
        self.amount = amount

    def to_dict(self) -> dict:
        """
        Επιστρέφει τη συναλλαγή σε μορφή dictionary.

        Returns:
            dict: Dictionary με sender, receiver, amount.
        """
        return {
            "sender": self.sender,
            "receiver": self.receiver,
            "amount": self.amount
        }