<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class SendLead extends Controller
{
    public function index(Request $request)
    {

        $uri = (float) $request->premia > 50 ? 'https://ibell.frb.io/zapier/add/lead/31198'
        : 'https://ibell.frb.io/zapier/add/lead/38754';

        return Http::post($uri, [
            'שם_מלא' => $request->name,
            'טלפון' => $request->telephone,
            'אימייל' => $request->email,
            'תעודת_זהות' => $request->id,
        ]);
    }
}
