(function () {
  var trips = [
    {
      name: 'Everest Base Camp Trek',
      duration: '15 Days',
      departure: '15 Sep 2025',
      price: 'USD 1,350'
    },
    {
      name: 'Annapurna Circuit Trek',
      duration: '15 Days',
      departure: '01 Oct 2025',
      price: 'USD 1,150'
    },
    {
      name: 'Langtang Valley Trek',
      duration: '11 Days',
      departure: '10 Oct 2025',
      price: 'USD 950'
    },
    {
      name: 'Manaslu Circuit Trek',
      duration: '18 Days',
      departure: '20 Mar 2026',
      price: 'USD 1,650'
    }
  ];

  function buildRows() {
    return trips.map(function (t, i) {
      var rowBg = i % 2 === 0 ? '#ffffff' : '#f8fafc';
      return (
        '<tr style="background:' + rowBg + ';border-bottom:1px solid #e2e8f0;">' +
          '<td style="padding:12px 16px;font-weight:600;color:#1A3C5E;">' +
            t.name +
            '<br><span style="font-weight:400;font-size:12px;color:#64748b;">' + t.duration + '</span>' +
          '</td>' +
          '<td style="padding:12px 16px;color:#374151;font-size:14px;">' + t.departure + '</td>' +
          '<td style="padding:12px 16px;">' +
            '<span style="display:inline-block;background:#dcfce7;color:#166534;font-size:12px;font-weight:600;padding:3px 10px;border-radius:9999px;border:1px solid #bbf7d0;">Guaranteed</span>' +
          '</td>' +
          '<td style="padding:12px 16px;font-weight:700;color:#1A3C5E;font-size:15px;">' + t.price + '</td>' +
          '<td style="padding:12px 16px;">' +
            '<a href="contact.html?trip=' + encodeURIComponent(t.name) + '" ' +
               'style="display:inline-block;background:#D97706;color:#fff;font-size:13px;font-weight:600;padding:7px 16px;border-radius:6px;text-decoration:none;white-space:nowrap;transition:background 0.2s;" ' +
               'onmouseover="this.style.background=\'#B45309\'" onmouseout="this.style.background=\'#D97706\'">' +
              'Enquire Now' +
            '</a>' +
          '</td>' +
        '</tr>'
      );
    }).join('');
  }

  function createModal() {
    var el = document.createElement('div');
    el.id = 'deals-modal-overlay';
    el.style.cssText = [
      'position:fixed', 'inset:0', 'z-index:9999',
      'background:rgba(0,0,0,0.65)',
      'display:flex', 'align-items:center', 'justify-content:center',
      'padding:16px', 'overflow-y:auto'
    ].join(';');

    el.innerHTML =
      '<div id="deals-modal" role="dialog" aria-modal="true" aria-labelledby="deals-modal-title" ' +
           'style="background:#fff;border-radius:12px;width:100%;max-width:820px;box-shadow:0 25px 60px rgba(0,0,0,0.4);overflow:hidden;font-family:Inter,sans-serif;">' +

        /* ── Header ── */
        '<div style="background:#0F2340;padding:20px 24px;display:flex;align-items:flex-start;justify-content:space-between;gap:12px;">' +
          '<div>' +
            '<p style="color:#F59E0B;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;margin:0 0 6px;">Exciting Adventure Deals: 2025 | 2026</p>' +
            '<h2 id="deals-modal-title" style="color:#ffffff;font-size:24px;font-weight:700;margin:0;line-height:1.2;">Departing Soon!</h2>' +
          '</div>' +
          '<button id="deals-modal-close" aria-label="Close" ' +
                  'style="flex-shrink:0;background:rgba(255,255,255,0.12);border:none;color:#fff;width:32px;height:32px;border-radius:50%;font-size:20px;line-height:1;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:background 0.2s;" ' +
                  'onmouseover="this.style.background=\'rgba(255,255,255,0.25)\'" onmouseout="this.style.background=\'rgba(255,255,255,0.12)\'">' +
            '&times;' +
          '</button>' +
        '</div>' +

        /* ── Sub-header band ── */
        '<div style="background:#1A3C5E;padding:8px 24px;">' +
          '<p style="color:#cbd5e1;font-size:13px;margin:0;">Book your adventure today &mdash; limited spots available.</p>' +
        '</div>' +

        /* ── Table wrapper ── */
        '<div style="overflow-x:auto;">' +
          '<table style="width:100%;border-collapse:collapse;min-width:560px;">' +
            '<thead>' +
              '<tr style="background:#0F2340;">' +
                '<th style="padding:11px 16px;text-align:left;color:#e2e8f0;font-size:13px;font-weight:600;letter-spacing:0.04em;">Trip Name</th>' +
                '<th style="padding:11px 16px;text-align:left;color:#e2e8f0;font-size:13px;font-weight:600;letter-spacing:0.04em;">Departure Date</th>' +
                '<th style="padding:11px 16px;text-align:left;color:#e2e8f0;font-size:13px;font-weight:600;letter-spacing:0.04em;">Trip Status</th>' +
                '<th style="padding:11px 16px;text-align:left;color:#e2e8f0;font-size:13px;font-weight:600;letter-spacing:0.04em;">Price</th>' +
                '<th style="padding:11px 16px;text-align:left;color:#e2e8f0;font-size:13px;font-weight:600;letter-spacing:0.04em;">Action</th>' +
              '</tr>' +
            '</thead>' +
            '<tbody>' + buildRows() + '</tbody>' +
          '</table>' +
        '</div>' +

        /* ── Footer ── */
        '<div style="background:#f8fafc;padding:14px 24px;border-top:1px solid #e2e8f0;text-align:center;">' +
          '<p style="margin:0;font-size:12px;color:#64748b;">Prices are per person &bull; Group discounts available &bull; ' +
            '<a href="contact.html" style="color:#D97706;font-weight:600;text-decoration:none;">Contact us</a> for custom departures.' +
          '</p>' +
        '</div>' +

      '</div>';

    return el;
  }

  function showModal() {
    var overlay = createModal();
    document.body.appendChild(overlay);

    /* Close on × button */
    document.getElementById('deals-modal-close').addEventListener('click', function () {
      overlay.remove();
    });

    /* Close on overlay click (outside modal box) */
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) overlay.remove();
    });

    /* Close on Escape key */
    document.addEventListener('keydown', function handler(e) {
      if (e.key === 'Escape') {
        overlay.remove();
        document.removeEventListener('keydown', handler);
      }
    });
  }
// resume model, just uncomment below line  
  // window.addEventListener('load', showModal); 
})();
