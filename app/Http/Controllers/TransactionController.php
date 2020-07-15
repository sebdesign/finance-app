<?php

namespace App\Http\Controllers;

use App\Transaction;
use Illuminate\Http\Request;

class TransactionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $transactions = Transaction::orderByDesc('date')->paginate(5);

        $pagination = $transactions;

        $transaction_data = $transactions->groupBy(function ($item) {
            return $item->date->format('Y-m-d');
        });

        $groups = [];

        foreach ($transaction_data as $group => $transactions) {
            $balance = 0;

            foreach ($transactions as $transaction) {
                $balance += $transaction->amount;
            }

            $groups[] = [
                'date' => $group,
                'transactions' => $transactions,
                'balance' => $balance
            ];
        }

        return response()->json([
            'pagination' => $pagination,
            'groups' => $groups
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $transaction = Transaction::create($request->all());

        return $this->show($transaction);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Transaction  $transaction
     * @return \Illuminate\Http\Response
     */
    public function show(Transaction $transaction)
    {
        return response()->json([
            'transaction' => $transaction
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Transaction  $transaction
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Transaction $transaction)
    {
        $transaction->update($request->all());

        return $this->show($transaction->fresh());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Transaction  $transaction
     * @return \Illuminate\Http\Response
     */
    public function destroy(Transaction $transaction)
    {
        $transaction->delete();

        return $this->show($transaction);
    }
}
